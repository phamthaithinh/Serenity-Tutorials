
namespace MovieTutorial.MovieDB
{
    using jQueryApi;
    using Serenity;
    using System.Collections.Generic;

    [IdProperty("MovieId"), NameProperty("Title")]
    [FormKey("MovieDB.Movie"), LocalTextPrefix("MovieDB.Movie"), Service("MovieDB/Movie")]
    public class MovieDialog : EntityDialog<MovieRow>
    {
    }
}