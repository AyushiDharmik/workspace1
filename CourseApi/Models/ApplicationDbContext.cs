using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using CourseApi.Models;

namespace CourseApi.Models
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions <ApplicationDbContext> options):base(options)
        {
        }
        public virtual DbSet<Course> Courses {get;set;}
        public virtual DbSet<Enquiry> Enquiries {get;set;}
        public virtual DbSet<User> Users {get;set;}
       
    }
}