using MovieApp.Models;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using MovieApp.ViewModel;
 
namespace MovieApp.Controllers;
 
[ApiController]
[Route("/[controller]")]
 
public class MovieController : ControllerBase
{
   MovieContext context = new MovieContext();
 
   [HttpGet]
   [Route("ShowMovies")]
   public IActionResult GetShowMovies()
   {
       var data = context.Movie_VMs.FromSqlInterpolated<Movie_VM>($"MovieInfo");
       return Ok(data);
   }
 
   [HttpGet]
  [Route("DisplayMovies/{Rating}/{Year}")]
  public IActionResult GetDisplayMovies(int rating,int year)
  {
    var data = from m in context.Movies where m.Rating == rating && m.YearRelease == year select m;
    if(data.Count() == 0 )
    {
return NotFound($"No Movies in{rating} for the Year {year}");
    }
    return Ok(data);  
  }
   [HttpGet]
   [Route("DisplayByRating")]
   public IActionResult GetDisplayByRating([FromQuery] int rating)
   {
    var data = context.Movies.Where(m=>m.Rating ==rating);
    if(data.Count()==0)
    {
      return NotFound($"No movies in rating {rating}");
    }
    return Ok(data);
   }
   [HttpGet]
   [Route("ListMovies")]
   
 
   public IActionResult Get()
   {
   // var data = context.Movies.ToList();                       method syntax
   var data = from m in context.Movies select m;                //linq syntax
   return Ok(data);                                              //here ok is for 200 page
   }
 
   [HttpGet]
   [Route("ListMovies/{id}")]
   public IActionResult Get(int id)
   {
      if(id==null)
      {
        return BadRequest("Id cannot be null");                        //400 page
      }
      var data = (from m in context.Movies where m.Id == id select m).FirstOrDefault();
      // var data = context.Movies.Find(id);
      if(data == null)
      {
        return NotFound($"Movie {id} not found");                     //404 page
      }
      return Ok(data);
   }
 
   [HttpPost]
   [Route("AddMovie")]
   public IActionResult Post(Movie movie)
   {
     if(ModelState.IsValid)
     {
        try
        {
              context.Movies.Add(movie);
              context.SaveChanges();
        }
        catch(System.Exception ex)
        {
            return BadRequest(ex.InnerException.Message);             //property of exception
        }
     }
     return Created("Record Added",movie);                            //201 page
   }
   [HttpPut]
   [Route("EditMovie/{id}")]
   public IActionResult Put(int id,Movie movie)
   {
    if(ModelState.IsValid)
     {
        Movie omovie = context.Movies.Find(id);
        omovie.Name = movie.Name;
        omovie.Rating = movie.Rating;
        omovie.YearRelease= movie.YearRelease;
        context.SaveChanges();
        return Ok();
     }
     return BadRequest("Unable to Edit Record");
   }
   [HttpDelete]
   [Route("DeleteMovie/{id}")]
   public IActionResult Delete(int id)
   {
    try{
        var detail = context.Details.Where(d=>d.MovieId==id);
        if(detail.Count() != 0)
        {
            throw new Exception("Cannot delete movie");
        }
        var data=context.Movies.Find(id);
        context.Movies.Remove(data);
        context.SaveChanges();
        return Ok();
    }
    catch(System.Exception ex)
    {
        return BadRequest(ex.Message);
    }
   }
}
 