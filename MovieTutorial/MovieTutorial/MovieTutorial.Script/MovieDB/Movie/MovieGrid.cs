
namespace MovieTutorial.MovieDB
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    [ColumnsKey("MovieDB.Movie"), IdProperty("MovieId"), NameProperty("Title")]
    [DialogType(typeof(MovieDialog)), LocalTextPrefix("MovieDB.Movie"), Service("MovieDB/Movie")]
    public class MovieGrid : EntityGrid<MovieRow>
    {
        public MovieGrid(jQueryObject container)
            : base(container)
        {
        }
    }

    // Please remove this partial class or the first line below, after you run ScriptContexts.tt
    [Imported, Serializable, PreserveMemberCase] 
    public partial class MovieRow
    {
    }
}