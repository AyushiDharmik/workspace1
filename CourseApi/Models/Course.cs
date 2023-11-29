using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CourseApi.Models
{
    public class Course
    {
        public int CourseId {get; set;}
        public string? CourseName {get; set;}
        public string? Description {get; set;}
        public string? Duration {get; set;}
        public decimal Amount {get; set;}
        public string? CreatedBy {get; set;}
        public string? ModifiedBy {get; set;}
    }
}