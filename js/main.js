// print data in page
services.map(service=>{
    console.log(service);
    let listItem = `<li rel="${service.id}" style="background-color:${service.colorCode};" class="service_tab">${service.serviceName}</li>`
    $('.service_tabs').append(listItem);
    let serviceDetails = `<div id="${service.id}" class="service_Details">
    <header>
        ${service.image?`<img class="service_image" src="${service.image}" alt="${service.serviceName}">`:''}
    </header>
        <div class="details-container">
        ${service.serviceName?`<h3 class="service-name" style="color:${service.colorCode};">${service.serviceName}</h3>`:''}
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

                        `<ul class="data-list">
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
        ${
            service.anotherDetails !== null?
                service.anotherDetails.links !== null?
                    (typeof service.anotherDetails.links === 'object') ?
                        `<div class="actions">
                        ${
                            jQuery.map( service.anotherDetails.links, function( item, index ) {
                                return `<a class="action-button" href="${item.link}" style="background-color: ${service.colorCode}">${item.linkTitle}</a>`;
                            })
                        }
                        </div>`
                    :''
                :''
            :''
        }
        </div>
    </div>`;
    // remove comma while printing array
    $(".data-list").each(function(){
        $(this).html($(this).html().replace(/,/g , ''));
    });
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

    clients.map(client=>{
        let clientData = `<img src="${client.logo}" alt="${client.name}" height="100px" width="100px"/>`;
        $('.slick-slider').append(clientData)
    })

    $(".slick-slider").slick({
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
        accessibility: true,
        arrows: true,
        pauseOnHover: true,
        prevArrow: '<i class="fas fa-arrow-circle-left"></i>',
        nextArrow: '<i class="fas fa-arrow-circle-right"></i>'
    });
});
