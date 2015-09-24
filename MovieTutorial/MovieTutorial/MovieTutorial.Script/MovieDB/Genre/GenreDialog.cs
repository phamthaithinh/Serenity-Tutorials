
namespace MovieTutorial.MovieDB
{
    using jQueryApi;
    using Serenity;
    using System.Collections.Generic;

    [IdProperty("GenreId"), NameProperty("Name")]
    [FormKey("MovieDB.Genre"), LocalTextPrefix("MovieDB.Genre"), Service("MovieDB/Genre")]
    public class GenreDialog : EntityDialog<GenreRow>
    {
    }
}