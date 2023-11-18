using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Xyz.Models;
 
namespace Xyz.Models
{
    public class XyzDbContext: DbContext
    {
        public XyzDbContext(DbContextOptions <XyzDbContext> options): base(options){ }
 
        public virtual DbSet<Employee> Employees{get;set;}
          public virtual DbSet<Department> Departments{get;set;}
    }
}