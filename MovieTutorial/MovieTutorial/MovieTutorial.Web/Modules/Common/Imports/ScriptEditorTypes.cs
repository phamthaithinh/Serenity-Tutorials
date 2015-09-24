
using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace MovieTutorial.Administration
{
    public partial class PermissionCheckEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "MovieTutorial.Administration.PermissionCheckEditor";
    
        public PermissionCheckEditorAttribute()
            : base(Key)
        {
        }
    }

    public partial class PermissionModuleEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "MovieTutorial.Administration.PermissionModuleEditor";
    
        public PermissionModuleEditorAttribute()
            : base(Key)
        {
        }
    }

    public partial class RoleCheckEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "MovieTutorial.Administration.RoleCheckEditor";
    
        public RoleCheckEditorAttribute()
            : base(Key)
        {
        }
    }
}

namespace MovieTutorial.Common
{
    public partial class LanguageSelectionAttribute : CustomEditorAttribute
    {
        public const string Key = "MovieTutorial.Common.LanguageSelection";
    
        public LanguageSelectionAttribute()
            : base(Key)
        {
        }
    }
}

namespace MovieTutorial.Northwind
{
    public partial class PhoneEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "MovieTutorial.Northwind.PhoneEditor";
    
        public PhoneEditorAttribute()
            : base(Key)
        {
        }
    
        public Boolean Multiple
        {
            get { return GetOption<Boolean>("multiple"); }
            set { SetOption("multiple", value); }
        }
    }
}

