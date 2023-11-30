using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CourseApi.Models
{
    public class Payment
    {
        public int PaymentId {get;set;}
        public string? Status {get;set;}
        public decimal Amount {get;set;}
        public DateTime PaymentDate {get;set;}
        public string? Mode {get;set;}
        public int UserId {get; set;}
        public int AdmissionId {get; set;}
         public int CourseId {get; set;}

    }
}