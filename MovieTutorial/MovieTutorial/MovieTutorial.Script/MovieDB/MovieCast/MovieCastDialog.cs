
namespace MovieTutorial.MovieDB
{
    using jQueryApi;
    using Serenity;
    using System.Collections.Generic;

    [IdProperty("MovieCastId"), NameProperty("Character")]
    [FormKey("MovieDB.MovieCast"), LocalTextPrefix("MovieDB.MovieCast"), Service("MovieDB/MovieCast")]
    public class MovieCastDialog : EntityDialog<MovieCastRow>
    {
    }
}