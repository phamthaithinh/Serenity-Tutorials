
namespace MovieTutorial.MovieDB
{
    using jQueryApi;
    using Serenity;
    using System.Collections.Generic;

    [IdProperty("PersonId"), NameProperty("Firstname")]
    [FormKey("MovieDB.Person"), LocalTextPrefix("MovieDB.Person"), Service("MovieDB/Person")]
    public class PersonDialog : EntityDialog<PersonRow>
    {
    }
}