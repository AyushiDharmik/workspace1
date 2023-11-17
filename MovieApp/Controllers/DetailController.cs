using MovieApp.Models;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
 
namespace MovieApp.Controllers;
[ApiController]
[Route("/[controller]")]
 
public class DetailController : ControllerBase
{
    MovieContext context = new MovieContext();
   [HttpGet]
   [Route("ListDetails")]
    public IActionResult Get()
   {
    var data = from d in context.Details select new{
        d.Movie.Name,
        d.Actor,
        d.Role
    };              
   return Ok(data);
   }
 
   [HttpGet]
   [Route("ListDetails/{id}")]
   public IActionResult Get(int id)
   {
     var data = from d in context.Details select new{
        d.Actor,
        d.Role,
        d.Movie.Name,
        d.Movie.YearRelease
    };              
      return Ok(data);
   }
 
   [HttpPost]
   [Route("AddDetails")]
   public IActionResult Post(Detail detail)
   {
     if(ModelState.IsValid)
     {
        try
        {
              context.Details.Add(detail);
              context.SaveChanges();
        }
        catch(System.Exception ex)
        {
            return BadRequest(ex.InnerException.Message);            
        }
     }
     return Created("Record Added",detail);                            
   }
 
    [HttpPut]
   [Route("EditDetail/{id}")]
   public IActionResult Put(int id,Detail detail)
   {
    if(ModelState.IsValid)
     {
        Detail detail1 = context.Details.Find(id);
        detail1.Actor = detail.Actor;
        detail1.Gender = detail.Gender;
        detail1.Role= detail.Role;
        context.SaveChanges();
        return Ok();
     }
     return BadRequest("Unable to Edit Record");
   }
   [HttpDelete]
   [Route("DeleteDetail/{id}")]
   public IActionResult Delete(int id)
   {
    try{
        var detail = context.Details.Where(d=>d.MovieId==id);
        if(detail.Count() != 0)
        {
            throw new Exception("Cannot delete movie");
        }
        var data=context.Details.Find(id);
        context.Details.Remove(data);
        context.SaveChanges();
        return Ok();
    }
    catch(System.Exception ex)
    {
        return BadRequest(ex.Message);
    }
   }
 
}