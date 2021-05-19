export const MembersComponent = {
    template:
    `<div>
        <table border="1" style="width: 100%;border:1px solid #ccc">
    <thead>
        <tr>
            <th>name</th>
            <th>adreess</th>
            <th>no_hp</th>
            <th>action</th>
        </tr>
    </thead>
    <tbody v-for="member of members">
        <tr>
            <td>
                {{member.name}}
            </td>
            <td>
                {{member.address}}
            </td>
            <td>{{member.no_hp}}</td>
            <td> 
                <button @click="$emit('edit', member)">Edit</button>
                <button @click="$emit('destroy' ,member.id)">Hapus</button>
                <button @click="$emit('upload-image', member)">Upload Foto</button>
            </td>
        </tr>
    </tbody>
</table>
    </div>`,
    props: ['members']
}