
namespace MovieTutorial.MovieDB
{
    using jQueryApi;
    using Serenity;

    [ColumnsKey("MovieDB.PersonMovie"), IdProperty(MovieCastRow.IdProperty)]
    [LocalTextPrefix(MovieCastRow.LocalTextPrefix), Service(MovieCastService.BaseUrl)]
    public class PersonMovieGrid : EntityGrid<MovieCastRow>
    {
        public PersonMovieGrid(jQueryObject container)
            : base(container)
        {
        }
    }
}