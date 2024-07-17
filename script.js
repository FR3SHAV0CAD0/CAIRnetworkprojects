const map = new maplibregl.Map({
    container: 'map',
    style: 'https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL',
    center: [-104.136610, 49.013827],
    zoom: 3.5
});

document.getElementById('zoom-in').addEventListener('click', () => {
    map.zoomIn();
});

document.getElementById('zoom-out').addEventListener('click', () => {
    map.zoomOut();
});

// Function to apply jitter to coordinates
function jitterCoordinates(coordinates, index, total) {
    const offset = 0.0001 * (index + 1);
    const angle = (index / total) * 2 * Math.PI;
    return [
        coordinates[0] + offset * Math.cos(angle), 
        coordinates[1] + offset * Math.sin(angle)
    ];
}

map.on('load', () => {
    // Original features array
    const features = [
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [-113.524235, 53.527375]
            },
            'properties': {
                'label': 'Supporting Indigenous Community-Led Governance Renewal',
                'description': '<strong>Project Lead(s):</strong> Shalene Jobin and Matt Wildcat<br><strong>Partner Organization(s):</strong> Red Earth Cree Nation<br><strong>Thematic</strong>Theorizing and Transforming Indigenous Governance Systems',
                'category': 1
            }
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [-123.307814, 48.467004]
            },
            'properties': {
                'label': 'Implementing A Relational Approach To Treaty In Public And Policy Realms',
                'description': '<strong>Project Lead(s):</strong> Gina Starblanket<br><strong>Partner Organization(s)</strong>Indigenous Knowledge and Wisdom Centre<br><strong>Thematic:</strong>Theorizing and Transforming Indigenous Governance Systems',
                'category': 1
            }
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [-113.524235, 53.527375]
            },
            'properties': {
                'label': 'Yi’Eenoodài’ Yeendoo Gwizhit Gwitèe’Ah (Long Ago Will Be In The Future): A History Of Twentieth-Century Dinjii Zhuh Nationhood',
                'description': "<strong>Project Lead(s):</strong>Crystal Fraser<br><strong>Partner Organization(s):</strong>Gwich'in Tribal Council<br><strong>Thematic:</strong>Theorizing and Transforming Indigenous Governance Systems",
                'category': 1
            }
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [-106.63198, 52.13026]
            },
            'properties': {
                'label': 'Indigenous Resurgence Through Revitalizing Âtayôhkéwina',
                'description': '<strong>Project Lead(s):</strong> Kathy Walker<br><strong>Project Organization(s):</strong> Chokecherry Studios, Sask Indigenous Cultural Centre, and Sturgeon Lake First Nation<br><strong>Thematic:</strong> Theorizing and Transforming Indigenous Governance Systems',
                'category': 1
            }
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [-113.524235, 53.527375]
            },
            'properties': {
                'label': 'Supporting Indigenous Technoscientific Knowledge Production And Governance In Canada',
                'description': '<strong>Project Lead(s):</strong> Kim TallBear<br><strong>Partner Organization(s):</strong> Genome, Canada<br><strong>Thematic:</strong> Theorizing and Transforming Indigenous Governance Systems',
                'category': 1
            }
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [-123.249168, 49.26057]
            },
            'properties': {
                'label': 'Reclaiming Relations: Indigenous Land-Based Governance In The Context Of Rural-Urban Mobility And Resettlement',
                'description': '<strong>Project Lead(s):</strong> David Gaertner<br><strong>Partner Organization(s):</strong> TBD<br><strong>Thematic:</strong> Theorizing and Transforming Indigenous Governance Systems',
                'category': 1
            }
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [-106.6334, 52.1305]
            },
            'properties': {
                'label': 'Culturally Appropriate End-of-Life Care in First Nations Communities',
                'description': '<strong>Project Lead(s):</strong> Carrie Bourassa and Greg Marchildon<br><strong>Partner Organization(s):</strong> Federation of Sovereign Indigenous Nations<br><strong>Thematic:</strong> Critical, local, and global approaches to Indigenous relationality',
                'category': 2
            }
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [-123.1207, 49.2827]
            },
            'properties': {
                'label': 'Urban Indigenous Youth Foraging and Wellness Research Project',
                'description': '<strong>Project Lead(s):</strong> Cheryl Bryce and Dawn Smith<br><strong>Partner Organization(s):</strong> TBD<br><strong>Thematic:</strong> Critical, local, and global approaches to Indigenous relationality',
                'category': 2
            }
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [-123.1207, 49.2827]
            },
            'properties': {
                'label': 'Learning Through Connection: Indigenous Community Engagement And Educational Reform',
                'description': '<strong>Project Lead(s):</strong> Leyland W. Schofield<br><strong>Partner Organization(s):</strong> Urban Native Youth Association<br><strong>Thematic:</strong> Critical, local, and global approaches to Indigenous relationality',
                'category': 2
            }
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [-123.1207, 49.2827]
            },
            'properties': {
                'label': 'Intergenerational Wellness And Indigenous Midwifery: Integrating Indigenous Knowledge In The Context Of Western Healthcare Systems',
                'description': '<strong>Project Lead(s):</strong> Racquel Wuttunee<br><strong>Partner Organization(s):</strong> TBD<br><strong>Thematic:</strong> Critical, local, and global approaches to Indigenous relationality',
                'category': 2
            }
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [-106.6344, 52.1326]
            },
            'properties': {
                'label': 'Youth Engagement and Cultural Revitalization in Indigenous Communities',
                'description': '<strong>Project Lead(s):</strong> Autumn LaRose-Smith and Cheyenne Francis<br><strong>Partner Organization(s):</strong> Federation of Sovereign Indigenous Nations<br><strong>Thematic:</strong> Honouring our Elders and training our youth through intergenerational knowledge transfer',
                'category': 3
            }
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [-123.249168, 49.26057]
            },
            'properties': {
                'label': 'Revitalizing Ancestral Languages Through Elder-Youth Mentorship',
                'description': '<strong>Project Lead(s):</strong> Jayde Simon and Keevin Lewis<br><strong>Partner Organization(s):</strong> TBD<br><strong>Thematic:</strong> Honouring our Elders and training our youth through intergenerational knowledge transfer',
                'category': 3
            }
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [-123.1216, 49.2837]
            },
            'properties': {
                'label': 'Promoting Intergenerational Knowledge Transmission In Indigenous Communities',
                'description': '<strong>Project Lead(s):</strong> Brianna Claxton and Tyler Coad<br><strong>Partner Organization(s):</strong> TBD<br><strong>Thematic:</strong> Honouring our Elders and training our youth through intergenerational knowledge transfer',
                'category': 3
            }
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [-106.6346, 52.1327]
            },
            'properties': {
                'label': 'Strengthening Indigenous Governance Through Elders\' Wisdom And Youth Leadership',
                'description': '<strong>Project Lead(s):</strong> Kayla Bird and Dallas Flett<br><strong>Partner Organization(s):</strong> Federation of Sovereign Indigenous Nations<br><strong>Thematic:</strong> Honouring our Elders and training our youth through intergenerational knowledge transfer',
                'category': 3
            }
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [-106.6348, 52.1328]
            },
            'properties': {
                'label': 'Empowering Indigenous Youth Through Traditional Ecological Knowledge',
                'description': '<strong>Project Lead(s):</strong> Casey Constant and Mark Desjarlais<br><strong>Partner Organization(s):</strong> Federation of Sovereign Indigenous Nations<br><strong>Thematic:</strong> Honouring our Elders and training our youth through intergenerational knowledge transfer',
                'category': 3
            }
        }
    ];

    const categories = {
        1: 'Theorizing and transforming Indigenous governance systems',
        2: 'Critical, local, and global approaches to Indigenous relationality',
        3: 'Honouring our Elders and training our youth through intergenerational knowledge transfer'
    };

    const categoriesColor = {
        1: 'rgb(0, 138, 238)',
        2: 'rgb(0, 255, 0)',
        3: 'rgb(255, 0, 0)'
    };

    // Initialize an array to track coordinates for each label
    const uniqueCoordinates = {};

    features.forEach((feature, index) => {
        const coordinates = feature.geometry.coordinates.join(',');
        if (uniqueCoordinates[coordinates]) {
            uniqueCoordinates[coordinates].push(index);
        } else {
            uniqueCoordinates[coordinates] = [index];
        }
    });

    // Apply jitter to coordinates with identical values
    for (const coordinates in uniqueCoordinates) {
        const indices = uniqueCoordinates[coordinates];
        const total = indices.length;
        indices.forEach((index, i) => {
            features[index].geometry.coordinates = jitterCoordinates(features[index].geometry.coordinates, i, total);
        });
    }

    features.forEach((feature) => {
        const el = document.createElement('div');
        el.className = 'marker';
        el.style.backgroundColor = categoriesColor[feature.properties.category];
        el.style.width = '12px';
        el.style.height = '12px';
        el.style.borderRadius = '50%';

        const marker = new maplibregl.Marker(el)
            .setLngLat(feature.geometry.coordinates)
            .setPopup(new maplibregl.Popup({ offset: 25 })
            .setHTML('<h3>' + feature.properties.label + '</h3><p>' + feature.properties.description + '</p>'))
            .addTo(map);

        const listItem = document.createElement('li');
        const listLink = document.createElement('a');
        listLink.textContent = feature.properties.label;
        listLink.href = '#';
        listLink.addEventListener('click', () => {
            map.flyTo({ center: feature.geometry.coordinates, zoom: 8 });
            marker.togglePopup();
        });

        listItem.appendChild(listLink);
        document.getElementById('category' + feature.properties.category + '-list').appendChild(listItem);
    });
});

document.getElementById('fly-edmonton').addEventListener('click', () => {
    map.flyTo({ center: [-113.4938, 53.5461], zoom: 8 });
});

document.getElementById('fly-victoria').addEventListener('click', () => {
    map.flyTo({ center: [-123.3656, 48.4284], zoom: 8 });
});

document.getElementById('fly-regina').addEventListener('click', () => {
    map.flyTo({ center: [-104.6189, 50.4452], zoom: 8 });
});
