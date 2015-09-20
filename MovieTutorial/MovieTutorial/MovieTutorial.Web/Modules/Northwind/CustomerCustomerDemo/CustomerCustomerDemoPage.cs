

//[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Northwind/CustomerCustomerDemo", url: "~/Northwind/CustomerCustomerDemo", permission: "Northwind")]

namespace MovieTutorial.Northwind.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Northwind/CustomerCustomerDemo"), Route("{action=index}")]
    public class CustomerCustomerDemoController : Controller
    {
        [PageAuthorize(Northwind.PermissionKeys.General)]
        public ActionResult Index()
        {
            return View("~/Modules/Northwind/CustomerCustomerDemo/CustomerCustomerDemoIndex.cshtml");
        }
    }
}