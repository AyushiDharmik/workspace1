using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using CourseApi.Models;
using Microsoft.EntityFrameworkCore;

namespace CourseApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CourseApiController : ControllerBase
    {
        private CourseDbContext db;
        public CourseApiController(CourseDbContext context)
        {
            this.db = context;
        }

        [HttpGet]
        public IActionResult GetCourses()
        {
            var course = db.Courses;
            return Ok(course);
        }

        [HttpPost]
        public IActionResult AddCourse(Course course)
        {
            db.Courses.Add(course);
            db.SaveChanges();
            return Created("Get",course);
        }

        [HttpPut]
        public IActionResult EditCourse(int id, Course course)
        {
            Course c = db.Courses.Find(id);
            if (c != null)
            {
                c.CourseId = course.CourseId;
                db.SaveChanges();
                return Created("Get",course);
            }
            return NotFound();
        }
        [HttpDelete]
        public IActionResult DeleteCourse(int id)
        {
            var c = db.Courses.FirstOrDefault(v => v.CourseId == id);
            if (c != null)
            {
                db.Courses.Remove(c);
                db.SaveChanges();
                return Ok();
            }
            else return NotFound();
        }
    }
}