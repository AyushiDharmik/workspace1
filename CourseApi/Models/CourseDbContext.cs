using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CourseApi.Models
{
    public class CourseDbContext:DbContext
    {
        public CourseDbContext(DbContextOptions <CourseDbContext> options):base(options)
        {
        }
        public virtual DbSet<Course> Courses {set;get;}
    }
}