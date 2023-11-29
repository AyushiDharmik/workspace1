using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using CourseApi.Models;

namespace CourseApi.Models
{
    public class CourseDbContext : DbContext
    {
        public CourseDbContext(DbContextOptions <CourseDbContext> options):base(options)
        {
        }
        public virtual DbSet<Course> Courses {get;set;}
    }
}