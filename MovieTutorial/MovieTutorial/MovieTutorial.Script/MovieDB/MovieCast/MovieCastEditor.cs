
namespace MovieTutorial.MovieDB
{
    using Common;
    using jQueryApi;
    using Serenity;
    using System.Linq;

    [ColumnsKey("MovieDB.MovieCast"), LocalTextPrefix("MovieDB.MovieCast")]
    public class MovieCastEditor : GridEditorBase<MovieCastRow>
    {
        public MovieCastEditor(jQueryObject container)
            : base(container)
        {
        }
    }
}