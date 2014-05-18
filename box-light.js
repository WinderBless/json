{
    "metadata": {
        "version": 4.3,
        "type": "Object",
        "generator": "ObjectExporter"
    },
    "geometries": [
        {
            "uuid": "C3BF1E70-0BE7-4E6D-B184-C9F1E84A3423",
            "type": "BufferGeometry",
            "data": {
                "attributes": {
                    "position": {
                        "itemSize": 3,
                        "type": "Float32Array",
                        "array": [50,50,50,...]
                    },
                    "normal": {
                        "itemSize": 3,
                        "type": "Float32Array",
                        "array": [1,0,0,...]
                    },
                    "uv": {
                        "itemSize": 2,
                        "type": "Float32Array",
                        "array": [0,1,...]
                    }
                },
                "boundingSphere": {
                    "center": [0,0,0],
                    "radius": 86.60254037844386
                }
            }
        }
    ],
    "materials": [
        {
            "uuid": "87D95D6C-6BB4-4B8F-8166-A3A6945BA5E3",
            "type": "MeshPhongMaterial",
            "color": 16777215,
            "ambient": 16777215,
            "emissive": 0,
            "specular": 1118481,
            "shininess": 30,
            "opacity": 1,
            "transparent": false,
            "wireframe": false
        }
    ],
    "object": {
        "uuid": "89529CC6-CBAC-412F-AFD1-FEEAE785BA19",
        "type": "Scene",
        "matrix": [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],
        "children": [
            {
                "uuid": "33FA38D9-0AAC-4657-9BBE-5E5780DDFB2F",
                "name": "Box 1",
                "type": "Mesh",
                "geometry": "C3BF1E70-0BE7-4E6D-B184-C9F1E84A3423",
                "material": "87D95D6C-6BB4-4B8F-8166-A3A6945BA5E3",
                "matrix": [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]
            },
            {
                "uuid": "16F2E381-2B73-44C4-A7BB-38D7E1CD2381",
                "name": "PointLight 1",
                "type": "PointLight",
                "color": 16777215,
                "intensity": 1,
                "distance": 0,
                "matrix": [1,0,0,0,0,1,0,0,0,0,1,0,100,200,150,1]
            }
        ]
    }
}