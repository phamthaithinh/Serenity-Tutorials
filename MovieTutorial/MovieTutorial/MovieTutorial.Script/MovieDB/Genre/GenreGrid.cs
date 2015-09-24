
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

    // Please remove this partial class or the first line below, after you run ScriptContexts.tt
    [Imported, Serializable, PreserveMemberCase] 
    public partial class GenreRow
    {
    }
}