
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

        protected override List<QuickSearchField> GetQuickSearchFields()
        {
            return new List<QuickSearchField>
            {
                new QuickSearchField { Name = "", Title = "all" },
                new QuickSearchField { Name = MovieRow.Fields.Description, Title = "description" },
                new QuickSearchField { Name = MovieRow.Fields.Storyline, Title = "storyline" },
                new QuickSearchField { Name = MovieRow.Fields.Year, Title = "year" }
            };
        }
    }
}