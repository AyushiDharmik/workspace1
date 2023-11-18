using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Xyz.Models;
 
namespace Xyz.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DepartmentController : ControllerBase
    {
        private XyzDbContext db;
    public DepartmentController(XyzDbContext db)
    {
        this.db=db;
    }
   
        [HttpGet]
        public IActionResult Get()  //IEnumerable Interface inherited by List
        {
                return Ok(db.Departments);
        }
 
        [HttpGet]
        [Route("{id}")]
        public IActionResult Get(int id)
        {
            var e = db.Departments.FirstOrDefault(e=>e.DepartmentId==id);
            if(e!=null) return Ok(e);
            else return NotFound();
        }
 
        [HttpPost]
        [Route("savedept")]
        public IActionResult Post(Department dept)
        {
                db.Departments.Add(dept);
                db.SaveChanges();
                return CreatedAtAction("Get",new {id=dept.DepartmentId},dept);
        }
        [HttpDelete]
        public IActionResult Delete(int id)
        {
            var e= db.Departments.FirstOrDefault(e=>e.DepartmentId==id);
            if(e!=null)
            {
                db.Departments.Remove(e);
                db.SaveChanges();
                return Ok();
            }
            else return NotFound();
        }
       
        [HttpPut]
        public IActionResult Put(int id, Department d)
        {
            var e=db.Departments.FirstOrDefault(e=>e.DepartmentId==id);
            if(e!=null)
            {
                e.DepartmentName=d.DepartmentName;
                db.SaveChanges();
                return Ok(e);
            }
            else return NotFound();
        }
    }
}