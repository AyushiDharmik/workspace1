using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using CourseApi.Models;
using Microsoft.EntityFrameworkCore;
using CourseApi.Models;

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
        public IActionResult Get()
        {
            var course = db.Courses;
            return Ok(course);
        }

        [HttpPost]
        public IActionResult Create(Course course)
        {
            db.Courses.Add(course);
            db.SaveChanges();
            return Ok();
        }

        [HttpPut]
        public IActionResult Edit(int id, Course course)
        {
            Course c = db.Courses.Find(id);
            if (c != null)
            {
                c.CourseId = course.CourseId;
                db.SaveChanges();
                return Ok();
            }
            return NotFound();
        }
        [HttpDelete]
        public IActionResult Delete(int id)
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