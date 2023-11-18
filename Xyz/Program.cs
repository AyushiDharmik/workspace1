using Microsoft.EntityFrameworkCore;
 using Xyz.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<XyzDbContext>
(options =>{
    options.UseSqlServer(builder.Configuration.GetConnectionString("myConnection"));
});
 
 
 
builder.Services.AddCors(x => {
    x.AddPolicy("corsPolicy", policy => {
        policy.AllowAnyHeader();
        policy.AllowAnyMethod();
        policy.AllowAnyOrigin();
 
        //policy.WithOrigins();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.UseCors("corsPolicy");

app.MapControllers();

app.Run();
