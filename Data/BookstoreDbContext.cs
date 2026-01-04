using Microsoft.EntityFrameworkCore;
using Bookstore.Backend.Models;

namespace Bookstore.Backend.Data;

public class BookStoreDbcontext : DbContext
{

	    public BookStoreDbcontext(DbContextOptions<BookStoreDbcontext> options)
        : base(options)
	{ }


	public DbSet<Book> Books => Set<Book>();
	public DbSet<Author> Authors => Set<Author>();
	public DbSet<Category> Categorys => Set<Category>();


}

