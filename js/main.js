// print data in page
services.map(service=>{
    console.log(service);
    let listItem = `<li rel="${service.id}" style="background-color:${service.colorCode};" class="service_tab">${service.serviceName}</li>`
    $('.service_tabs').append(listItem);
    let serviceDetails = `<div id="${service.id}" class="service_Details">
        ${service.image?`<img class="service_image" src="${service.image}" alt="${service.serviceName}">`:''}
        <p>${service.serviceDetails}</p>
        ${
            service.anotherDetails !== null?
                service.anotherDetails.title?`<h3 class="list-heading">${service.anotherDetails.title}</h3>`:''
            :'' 
        }
        ${
            service.anotherDetails !== null?
                service.anotherDetails.data !== null?
                    (typeof service.anotherDetails.data === 'object') ?

                        `<ul>
                        ${
                            jQuery.map( service.anotherDetails.data, function( item, index ) {
                                return `<li class="list">${item}</li>`;
                            })
                        }
                        </ul>`
                    :''
                :''
            :''
        }
    </div>`;
    $('.services_details').append(serviceDetails);
})


$(document).ready(function(){

    $('.service_tabs li:first-child').addClass('active');
    $('.service_Details:first-child').addClass('active');
    $rel = $('.service_tabs li:first-child').attr('rel');

    $('.service_tabs li').on('click', function() {

        // remove active class from the tab
        $('.service_tabs').find('li.active').removeClass('active');
        // add active class to the clicked tab
        $(this).addClass('active');

        // hide the current service details
        $('.services_details').find('.active').removeClass('active')

        // figure out which panel to show
        let panelToShow = $(this).attr('rel');

        // show the selected service details
        $('.service_Details#'+panelToShow).addClass('active')
    })
});