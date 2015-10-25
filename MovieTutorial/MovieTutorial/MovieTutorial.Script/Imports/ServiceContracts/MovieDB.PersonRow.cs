
namespace MovieTutorial.MovieDB
{
    using Serenity;
    using Serenity.ComponentModel;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Runtime.CompilerServices;

    [Imported, Serializable, PreserveMemberCase]
    public partial class PersonRow
    {
        [InlineConstant] public const string IdProperty = "PersonId";
        [InlineConstant] public const string NameProperty = "Fullname";
        [InlineConstant] public const string LocalTextPrefix = "MovieDB.Person";
    
        public Int32? PersonId { get; set; }
        public String Firstname { get; set; }
        public String Lastname { get; set; }
        public String Fullname { get; set; }
        public String BirthDate { get; set; }
        public String BirthPlace { get; set; }
        public Gender? Gender { get; set; }
        public Int32? Height { get; set; }
    
        [Imported, PreserveMemberCase]
        public static class Fields
        {
            [InlineConstant] public const string PersonId = "PersonId";
            [InlineConstant] public const string Firstname = "Firstname";
            [InlineConstant] public const string Lastname = "Lastname";
            [InlineConstant] public const string Fullname = "Fullname";
            [InlineConstant] public const string BirthDate = "BirthDate";
            [InlineConstant] public const string BirthPlace = "BirthPlace";
            [InlineConstant] public const string Gender = "Gender";
            [InlineConstant] public const string Height = "Height";
        }
    }
    
}

