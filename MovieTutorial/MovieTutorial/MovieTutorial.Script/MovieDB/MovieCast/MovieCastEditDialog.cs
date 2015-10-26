
namespace MovieTutorial.MovieDB
{
    using jQueryApi;
    using Common;
    using Serenity;
    using System.Collections.Generic;

    [NameProperty("Character"), FormKey("MovieDB.MovieCast"), LocalTextPrefix("MovieDB.MovieCast")]
    public class MovieCastEditDialog : GridEditorDialog<MovieCastRow>
    {
    }
}
