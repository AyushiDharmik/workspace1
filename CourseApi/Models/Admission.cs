using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CourseApi.Models
{
    public class Admission
    {
        public int AdmissionId { get; set; }
        public int CourseId { get; set; }
        public int UserId { get; set; }
        public string? Status { get; set; }
        public virtual User? User { get; set; }
        public Boolean IsDeleted { get; set; }
    }
}