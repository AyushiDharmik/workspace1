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
    public class CourseApiController : ControllerBase
    {
        private readonly CourseDbContext _db;

        public CourseApiController(CourseDbContext context)
        {
            _db = context ?? throw new ArgumentNullException(nameof(context));
        }

        [HttpGet]
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

        [HttpPost]
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

                return CreatedAtAction("GetCourses", new { id = course.CourseId }, course);
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
                existingCourse.Amount = course.Amount;
                existingCourse.ModifiedBy = course.ModifiedBy;

                _db.SaveChanges();

                return NoContent();
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

                _db.Courses.Remove(course);
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
