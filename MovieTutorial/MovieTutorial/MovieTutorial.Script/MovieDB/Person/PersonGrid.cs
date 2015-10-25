
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

    // Please remove this partial class or the first line below, after you run ScriptContexts.tt
    [Imported, Serializable, PreserveMemberCase] 
    public partial class PersonRow
    {
    }
}