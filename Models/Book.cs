namespace Bookstore.Backend.Models;

public class Book 

{
    public int id { get; set; }
    public string title { get; set;} = string.Empty;
    public string isbn { get; set;  }  = string.Empty;

    public string authorId { get ; set; } = string.Empty;
    public Author Author { get; set; } = null!;

    public decimal price { get; set; }
    public int stock { get; set; }


    public int CategoryId { get; set; }
    public Category Category { get; set; } = null!;
}