using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CourseApi.Models;

namespace CourseApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CourseController : ControllerBase
    {
        private readonly ApplicationDbContext _db;

        public CourseController(ApplicationDbContext context)
        {
            _db = context ?? throw new ArgumentNullException(nameof(context));
        }

        [HttpGet("course")]
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

         [HttpPost("create")]
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

          [HttpDelete("{id}")]
        public IActionResult DeleteCourse(int id)
        {
            try
            {
                var course = _db.Courses.Find(id);

                if (course == null)
                {
                    return NotFound($"Course with ID {id} not found");
                }
                course.IsDeleted=false;
                _db.SaveChanges();

                return Ok("Course Deleted");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal Server Error: {ex.Message}");
            }
        }


        //   [HttpGet("student/course")]
        // public IActionResult GetStudentCourse()
        // {
        //     try
        //     {
        //         var courses = _db.Courses.ToList();
        //         return Ok(courses);
        //     }
        //     catch (Exception ex)
        //     {
        //         return StatusCode(500, $"Internal Server Error: {ex.Message}");
        //     }
        // }

        //   [HttpGet("payments/{id}")]
        // public IActionResult GetPayment()
        // {
        //     try
        //     {
        //         var payments = _db.Payments.ToList();
        //         return Ok(payments);
        //     }
        //     catch (Exception ex)
        //     {
        //         return StatusCode(500, $"Internal Server Error: {ex.Message}");
        //     }
        // }

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

          [HttpGet("admissions")]
        public IActionResult GetAdmissions()
        {
            try
            {
                var admissions = _db.Admissions.ToList();
                return Ok(admissions);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal Server Error: {ex.Message}");
            }
        }
        
           [HttpDelete("admission/{admissionId}")]
        public IActionResult DeleteAdmission(int id)
        {
            try
            {
                var admission = _db.Admissions.Find(id);

                if (admission == null)
                {
                    return NotFound($"Course with ID {id} not found");
                }
                admission.IsDeleted=false;
                _db.SaveChanges();

                return Ok("Course Deleted");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal Server Error: {ex.Message}");
            }
        }

        [HttpPut("{id}")]
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

      
    }
}
