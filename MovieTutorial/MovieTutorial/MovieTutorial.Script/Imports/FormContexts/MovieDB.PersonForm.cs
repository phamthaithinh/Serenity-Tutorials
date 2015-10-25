
namespace MovieTutorial.MovieDB
{
    using Serenity;
    using Serenity.ComponentModel;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Runtime.CompilerServices;

    public partial class PersonForm : PrefixedContext
    {
        [InlineConstant] public const string FormKey = "MovieDB.Person";
    
        public PersonForm(string idPrefix) : base(idPrefix) {}
    
        public StringEditor Firstname { get { return ById<StringEditor>("Firstname"); } }
        public StringEditor Lastname { get { return ById<StringEditor>("Lastname"); } }
        public DateEditor BirthDate { get { return ById<DateEditor>("BirthDate"); } }
        public StringEditor BirthPlace { get { return ById<StringEditor>("BirthPlace"); } }
        public EnumEditor Gender { get { return ById<EnumEditor>("Gender"); } }
        public IntegerEditor Height { get { return ById<IntegerEditor>("Height"); } }
    }
}

