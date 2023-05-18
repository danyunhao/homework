$(function(){
    $.ajax({
        url: 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-063?Authorization=CWB-5BCF079D-FE6F-4558-9016-E9E73A5D36FB&locationName=%E5%85%A7%E6%B9%96%E5%8D%80&elementName=T',
        type: "GET",
        dataType:"json",
        success:function(resource){
            console.log(resource);
            console.log(resource.records.locations[0].location[0].locationName);
            let weekday = ["Sun","Mon", "Tue", "Wed", "Thu", "Fri","Sat"];
            let j = 0;
            $('#city_name').html(resource.records.locations[0].locationsName);
            $('#district').html(resource.records.locations[0].location[0].locationName);
            $('#tempture').html(resource.records.locations[0].location[0].weatherElement[0].time[0].elementValue[0].value+"&#176");
            for(let i =0; i < 10; i++){
                console.log($('.block').eq(i).find('small').html());
                console.log($('.block').eq(i).find('h6').html());
                if((i % 2 == 0)){
                    let T = resource.records.locations[0].location[0].weatherElement[0].time[i].elementValue[0].value;
                    let tempture = `<strong>${T}&#176;</strong>`;     
                    let wd = resource.records.locations[0].location[0].weatherElement[0].time[i].startTime;         

                    $('.block').eq(j).find('h6').html(tempture);
                    const d = new Date(wd);
                    let day_index =wd.getDay();
                    $('.block').eq(j).find('small').html(weekday[day_index]);
                    j++;

                }
            }
            // console.log(resource.records.locations[0].location[0].weatherElement[0].time);

        },
        error:function(error){
            console.log(error);
        }

    })

})