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
        public IEnumerable<string> GetSessionValue()
        {
            List<string> sessionInfo = new List<string>();
            if (string.IsNullOrWhiteSpace(HttpContext.Session.GetString(Startup.SessionKeyUsername)))
            {
                HttpContext.Session.SetString(Startup.SessionKeyUsername, "Current User");
                HttpContext.Session.SetString(Startup.SessionKeyId, Guid.NewGuid().ToString());
            }

            var username = HttpContext.Session.GetString(Startup.SessionKeyUsername);
            var sessionId = HttpContext.Session.GetString(Startup.SessionKeyId);

            sessionInfo.Add(username);
            sessionInfo.Add(sessionId);

            return sessionInfo;
        }

    }
}