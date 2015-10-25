
namespace MovieTutorial.MovieDB
{
    using jQueryApi;
    using Serenity;
    using System.Collections.Generic;

    [IdProperty(PersonRow.IdProperty), NameProperty(PersonRow.Fields.Fullname)]
    [FormKey(PersonForm.FormKey), LocalTextPrefix(PersonRow.LocalTextPrefix), Service(PersonService.BaseUrl)]
    public class PersonDialog : EntityDialog<PersonRow>
    {
    }
}