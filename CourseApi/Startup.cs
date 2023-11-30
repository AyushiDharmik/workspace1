using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CourseApi
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDistributedMemoryCache();
            services.AddSession(options =>
            {
                options.IdleTimeout = TimeSpan.FromMinutes(100);
            });
            services.AddMvc();
        }
    }

    public void Configure(IApplicationBuilder app, Microsoft.AspNetCore.Hosting.IHostingEnvironment env)
    {

        if (env.IsDevelopment())

        {

            app.UseDeveloperExceptionPage();

            app.UseBrowserLink();

        }

        else

        {

        }

        app.UseExceptionHandler("/Home/Error");

        app.UseStaticFiles();

        app.UseSession();

        app.UseMvc(routes =>

        {

            routes.MapRoute(

    name: "default", template: "{controller=Home}/{action=Index}/{id?}");

        });

    }

}