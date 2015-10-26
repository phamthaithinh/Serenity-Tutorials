
namespace MovieTutorial.MovieDB.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("MovieDB.MovieCast")]
    [BasedOnRow(typeof(Entities.MovieCastRow))]
    public class MovieCastForm
    {
        [LookupEditor(typeof(Entities.PersonRow))]
        public Int32 PersonId { get; set; }
        public String Character { get; set; }
    }
}