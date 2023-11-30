using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace CourseApi.Controllers
{
    [Route("[controller]")]
    public class SessionController : Controller
    {
    
        
        [HttpGet]
        public IActionResult GetSessionValue()
        {
            // Example: Set session value
            HttpContext.Session.SetString("UserName", "JohnDoe");

            // Example: Get session value
            var userName = HttpContext.Session.GetString("UserName");

            return Ok(userName);
        }
     
    }
}