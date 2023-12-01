using Microsoft.AspNetCore.Mvc;
using CourseApi.Models;

namespace CourseApi.Controllers
{
    [ApiController]
    [Route("api")]
    public class CourseController : ControllerBase
    {
        private readonly ApplicationDbContext _db;

        public CourseController(ApplicationDbContext context)
        {
            _db = context ?? throw new ArgumentNullException(nameof(context));
        }

         //Get Courses

        [HttpGet("courses")]
        public IActionResult GetCourses()
        {
            try
            {
                var courses = _db.Courses.ToList();
                return Ok(courses);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal Server Error: {ex.Message}");
            }
        }

          //Get Courses

        [HttpGet("course/{id}")]
        public IActionResult GetCourse(int id)
        {
            try
            {
                var course = _db.Courses.FirstOrDefault(e=>e.CourseID==id);
                return Ok(course);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal Server Error: {ex.Message}");
            }
        }

           //Get Courses for a Student
          [HttpGet("student/courses")]
        public IActionResult GetStudentCourse()
        {
            try
            {
                var courses = _db.Courses.ToList();
                return Ok(courses);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal Server Error: {ex.Message}");
            }
        }

          //Post Course
        [HttpPost("course")]
        public IActionResult AddCourse([FromBody] Course course)
        {
            try
            {
                if (course == null)
                {
                    return BadRequest("Course object is null");
                }

                _db.Courses.Add(course);
                _db.SaveChanges();

                return CreatedAtAction("GetCourses", new { id = course.CourseID }, course);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal Server Error: {ex.Message}");
            }
        }


        //update course
          [HttpPut("course/{id}")]
        public IActionResult EditCourse(int id, [FromBody] Course course)
        {
            try
            {
                var existingCourse = _db.Courses.Find(id);

                if (existingCourse == null)
                {
                    return NotFound($"Course with ID {id} not found");
                }

                // Update properties based on your Course model
                existingCourse.CourseName = course.CourseName;
                existingCourse.Description = course.Description;
                existingCourse.Duration = course.Duration;
                existingCourse.FeesAmount = course.FeesAmount;
                existingCourse.ModifiedBy = course.ModifiedBy;

                _db.SaveChanges();

                return NoContent();
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal Server Error: {ex.Message}");
            }
        }

        //Delete Course
         [HttpDelete("course/{id}")]
        public IActionResult DeleteCourse(int id)
        {
            try
            {
                var course = _db.Courses.Find(id);

                if (course == null)
                {
                    return NotFound($"Course with ID {id} not found");
                }
                course.IsDeleted = false;
                _db.SaveChanges();

                return Ok("Course Deleted");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal Server Error: {ex.Message}");
            }
        }

       
       
        //Get enquiry

        [HttpGet("enquiry")]
        public IActionResult GetEnquiry()
        {
            try
            {
                var enquiry = _db.Enquiries.ToList();
                return Ok(enquiry);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal Server Error: {ex.Message}");
            }
        }

        

        // Post Enquiry
        [HttpPost("course/enquiry")]
        public async Task<IActionResult> AddEnquiry([FromBody] Enquiry enquiry)
        {
            try
            {
                if (enquiry == null)
                {
                    return BadRequest("Enquiry object is null");
                }
            
                _db.Enquiries.Add(enquiry);
                await _db.SaveChangesAsync();
                return CreatedAtAction("GetEnquiries", new { id = enquiry.EnquiryID }, enquiry);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal Server Error: {ex.Message}");
            }
        }

      

    }
}
