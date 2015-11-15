
namespace MovieTutorial.MovieDB
{
    using jQueryApi;
    using Serenity;
    using System.Collections.Generic;

    [ColumnsKey("MovieDB.PersonMovie"), IdProperty(MovieCastRow.IdProperty)]
    [LocalTextPrefix(MovieCastRow.LocalTextPrefix), Service(MovieCastService.BaseUrl)]
    public class PersonMovieGrid : EntityGrid<MovieCastRow>
    {
        public PersonMovieGrid(jQueryObject container)
            : base(container)
        {
        }

        protected override List<ToolButton> GetButtons()
        {
            return null;
        }

        protected override string GetInitialTitle()
        {
            return null;
        }

        protected override bool UsePager()
        {
            return false;
        }

        protected override bool GetGridCanLoad()
        {
            return personID != null;
        }

        private int? personID;

        public int? PersonID
        {
            get { return personID; }
            set
            {
                if (personID != value)
                {
                    personID = value;
                    SetEquality(MovieCastRow.Fields.PersonId, value);
                    Refresh();
                }
            }
        }
    }
}