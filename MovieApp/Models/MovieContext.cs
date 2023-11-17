using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MovieApp.Models;
using Microsoft.EntityFrameworkCore;
using MovieApp.ViewModel;

namespace MovieApp.Models
{
    public class MovieContext:DbContext
    {
        public MovieContext()
        {
        }

        public MovieContext(DbContextOptions<MovieContext> options) : base(options){

        }
        public virtual DbSet<Movie> Movies{get; set;}
    public virtual DbSet<Detail> Details{get; set;}
 
    public virtual DbSet<Movie_VM> Movie_VMs {get; set;}
    }
}