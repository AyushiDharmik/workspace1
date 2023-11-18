using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Xyz.Models;
// using Microsoft.AspNetCore.Authentication.JwtBearer;
// using Microsoft.AspNetCore.DataProtection.KeyManagement;
 
namespace Xyz.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeeController : ControllerBase
    {
        private XyzDbContext db;
    public EmployeeController(XyzDbContext db)
    {
        this.db=db;
    }
 
        [HttpGet]
        public IActionResult Get()  //IEnumerable Interface inherited by List
        {
                return Ok(db.Employees);
        }
        [HttpGet]
        [Route("Findbyid/{id}")]
        public IActionResult Get(int id)
        {
            var e = db.Employees.FirstOrDefault(e=>e.EmployeeId==id);
            return e!=null?Ok(e):NotFound();
        }
 
        [HttpPost]
        [Route("savedata")]
        public IActionResult Post(Employee emp)
        {
                db.Employees.Add(emp);
                db.SaveChanges();
                return CreatedAtAction("Get",new{id=emp.EmployeeId},emp);
        }
        [HttpDelete]
        public IActionResult Delete(int id)
        {
            var e= db.Employees.FirstOrDefault(e=>e.EmployeeId==id);
            if(e!=null)
            {
                db.Employees.Remove(e);
                db.SaveChanges();
                return Ok();
            }
            else return NotFound();
        }
       
        [HttpPut]
        [Route("{id}")]
        public IActionResult Put(int id, Employee emp)
        {
            var e=db.Employees.FirstOrDefault(e=>e.EmployeeId==id);
            if(e!=null)
            {
                e.EmployeeName=emp.EmployeeName;
                e.Salary=emp.Salary;
                db.SaveChanges();
                return Ok(e);
            }
            else return NotFound();
        }
        [HttpGet]
        [Route("{username}/{password}")]
        public string ValidateCredentials(string username,string password){
            if(username== password){
                return "valid credenteials";
            }
            else{
                return "Invalid";
            }
        }
        [HttpGet]
        [Route("admin/{username}/{password}")]
        public string ValidateAdminCredentials(string username,string password){
            if(username== password){
                return "valid Admin credenteials";
            }
            else{
                return "Invalid Admin";
            }
        }
    }
}