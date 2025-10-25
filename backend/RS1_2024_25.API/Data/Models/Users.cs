using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;

namespace UniStay.API.Data.Models
{
    public class Users
    {

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int UserID { get; set; }

        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string Username { get; set; }
        public string PasswordHash { get; set; }
        public string ProfileImage { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }

        [ForeignKey("Role")]
        public int RoleID { get; set; }
        public Roles Role { get; set; }

        public ICollection<Applications> Applications { get; set; }
        public ICollection<Messages> SentMessages { get; set; }
        public ICollection<Messages> ReceivedMessages { get; set; }
        public ICollection<Announcements> Announcements { get; set; }
        public ICollection<EquipmentRecords> EquipmentRecords { get; set; }
        public ICollection<Faults> Faults { get; set; }
        public ICollection<Invoices> Invoices { get; set; }
        public ICollection<HallReservations> HallReservations { get; set; }
    }
}
