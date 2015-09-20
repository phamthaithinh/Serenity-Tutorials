
namespace MovieTutorial.Navigation
{
    using MovieTutorial.Administration.Entities;
    using Serenity;
    using Serenity.Navigation;
    using System;
    using System.Collections.Generic;
    using System.Globalization;

    public partial class NavigationModel
    {
        public List<NavigationItem> Items { get; private set; }

        public NavigationModel()
        {
            Items = TwoLevelCache.GetLocalStoreOnly("LeftNavigationModel:NavigationItems:" + (Authorization.UserId ?? "-1"), TimeSpan.Zero,
                UserPermissionRow.Fields.GenerationKey, () =>
                    NavigationHelper.GetNavigationItems(System.Web.VirtualPathUtility.ToAbsolute));
        }
    }
}