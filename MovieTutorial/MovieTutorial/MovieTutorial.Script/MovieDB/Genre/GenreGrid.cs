
namespace MovieTutorial.MovieDB
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    [ColumnsKey("MovieDB.Genre"), IdProperty("GenreId"), NameProperty("Name")]
    [DialogType(typeof(GenreDialog)), LocalTextPrefix("MovieDB.Genre"), Service("MovieDB/Genre")]
    public class GenreGrid : EntityGrid<GenreRow>
    {
        public GenreGrid(jQueryObject container)
            : base(container)
        {
        }
    }
}