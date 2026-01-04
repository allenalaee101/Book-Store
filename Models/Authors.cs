namespace Bookstore.Backend.Models;

public class Author
{
    public int id { get; set;}
    public string name { get; set; } = string.Empty;
    public string? Bio { get; set; }

    public ICollection<Book> Books { get; set; } = new List<Book>();
}