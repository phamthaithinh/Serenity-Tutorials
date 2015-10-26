
namespace MovieTutorial.MovieDB
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    [ColumnsKey("MovieDB.MovieCast"), IdProperty("MovieCastId"), NameProperty("Character")]
    [DialogType(typeof(MovieCastDialog)), LocalTextPrefix("MovieDB.MovieCast"), Service("MovieDB/MovieCast")]
    public class MovieCastGrid : EntityGrid<MovieCastRow>
    {
        public MovieCastGrid(jQueryObject container)
            : base(container)
        {
        }
    }
}