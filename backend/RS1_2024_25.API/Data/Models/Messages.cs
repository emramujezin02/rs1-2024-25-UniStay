using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace UniStay.API.Data.Models
{
    public class Messages
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int MessageID { get; set; }

        public string Subject { get; set; }
        public string MessageText { get; set; }
        public DateTime SentAt { get; set; }
        public bool IsRead { get; set; }

        [ForeignKey("SenderUser")]
        public int SenderUserID { get; set; }
        public Users SenderUser { get; set; }

        [ForeignKey("RecieverUser")]
        public int ReceiverUserID { get; set; }
        public Users ReceiverUser { get; set; }
    }
}
