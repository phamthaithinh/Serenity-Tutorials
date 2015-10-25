
namespace MovieTutorial.MovieDB
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    [ColumnsKey("MovieDB.Person"), IdProperty("PersonId"), NameProperty("Firstname")]
    [DialogType(typeof(PersonDialog)), LocalTextPrefix("MovieDB.Person"), Service("MovieDB/Person")]
    public class PersonGrid : EntityGrid<PersonRow>
    {
        public PersonGrid(jQueryObject container)
            : base(container)
        {
        }
    }
}